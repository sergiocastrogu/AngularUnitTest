import { TestBed } from "@angular/core/testing";
import { ProductsService } from "./product.service"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Product } from "../models/product.model";
import { generateManyProducts, generateOneProduct } from "../mocks/product.mock";
import { environment } from "../../environments/environment";

describe('ProductService', () => {

    let productService: ProductsService;
    let httpController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ProductsService,
            ]
        });
        productService = TestBed.inject(ProductsService);
        httpController = TestBed.inject(HttpTestingController);
    })

    it('should be created productService', () => {
        expect(productService).toBeTruthy();
    })

    describe('test for getAllSimple', () => {

        it('shoud return a product list ', (doneFn) => {
            //Arrange
            const mock: Product[] = generateManyProducts();
            //Act
            productService.getAllSimple().subscribe((product) => {
                //Assert
                expect(product.length).toEqual(mock.length);
                expect(product).toEqual(mock);
                doneFn();
            });

            //httpConfig
            const url = `${environment.API_URL}/api/v1/products`;
            const req = httpController.expectOne(url);
            req.flush(mock);
            httpController.verify();
        });

        fdescribe('test for getAll', () => {
            it('shoud return a product list ', (doneFn) => {
                //Arrange
                const mock: Product[] = generateManyProducts();
                //Act
                productService.getAll().subscribe((product) => {
                    //Assert
                    expect(product.length).toEqual(mock.length);
                    doneFn();
                });

                //httpConfig
                const url = `${environment.API_URL}/api/v1/products`;
                const req = httpController.expectOne(url);
                req.flush(mock);
                httpController.verify();
            });


            it('shoud return a product list with taxes', (doneFn) => {
                //Arrange
                const mock: Product[] = [
                    {
                        ...generateOneProduct(),
                        price: 100
                    },
                    {
                        ...generateOneProduct(),
                        price: 200
                    },
                    {
                        ...generateOneProduct(),
                        price: 0
                    },
                    {
                        ...generateOneProduct(),
                        price: -1
                    }
                ];
                //Act
                productService.getAll().subscribe((product) => {
                    //Assert
                    expect(product.length).toEqual(mock.length);
                    expect(product[0].taxes).toEqual(19);
                    expect(product[1].taxes).toEqual(38);
                    expect(product[2].taxes).toEqual(0);
                    expect(product[3].taxes).toEqual(0);
                    doneFn();
                });

                //httpConfig
                const url = `${environment.API_URL}/api/v1/products`;
                const req = httpController.expectOne(url);
                req.flush(mock);
                httpController.verify();
            });


            it('shoud send query params with limit in 10 and offset 3', (doneFn) => {
                //Arrange
                const mock: Product[] = generateManyProducts();
                const limit = 10;
                const offset = 3;
                //Act
                productService.getAll(limit, offset).subscribe((product) => {
                    //Assert
                    expect(product.length).toEqual(mock.length);
                    doneFn();
                });

                //httpConfig
                const url = `${environment.API_URL}/api/v1/products?limit=${limit}&offset=${offset}`;
                const req = httpController.expectOne(url);
                const params = req.request.params;
                expect(params.get('limit')).toEqual(`${limit}`);
                expect(params.get('offset')).toEqual(`${offset}`);
                req.flush(mock);
                httpController.verify();
            });
        });
    });



})