import * as api from '../services/api';
import mockedProducts from '../utils/products';

const productExample = {
  _id: 'asd623',
  name: 'Abóbora',
  quantity: 50,
  price: '10.99',
  active: true,
};

const editedProduct = {
  _id: 'asd623',
  name: 'Café',
  quantity: 25,
  price: '10.99',
  active: true,
};

describe('test functions crud', () => {
  it('createProduct function', async () => {
    const mockFetchPromise = Promise.resolve({
      json: () => Promise.resolve(productExample),
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    return api.create('products', productExample).then((product) => {
      expect(global.fetch).toHaveBeenCalled();
      expect(product).toEqual(productExample);
    });
  });

  it('getProducts function', async () => {
    const mockFetchPromise = Promise.resolve({
      json: () => Promise.resolve(mockedProducts),
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    return api.get('products').then((products) => {
      expect(global.fetch).toHaveBeenCalled();
      expect(products).toEqual(mockedProducts);
    });
  });

  it('getProductById function', async () => {
    const mockFetchPromise = Promise.resolve({
      json: () => Promise.resolve(productExample),
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    return api.getById('products', productExample._id).then((product) => {
      expect(global.fetch).toHaveBeenCalled();
      expect(product).toEqual(productExample);
    });
  });

  it('editProduct function', async () => {
    const mockFetchPromise = Promise.resolve({
      json: () => Promise.resolve(editedProduct),
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    return api
      .edit('products', productExample._id, editedProduct)
      .then((product) => {
        expect(global.fetch).toHaveBeenCalled();
        expect(product).toEqual(editedProduct);
      });
  });

  it('deleteProduct function', async () => {
    const mockFetchPromise = Promise.resolve({
      json: () => Promise.resolve(),
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    return api.remove('products', productExample._id).then((product) => {
      expect(global.fetch).toHaveBeenCalled();
      expect(product).toBeUndefined();
    });
  });
});
