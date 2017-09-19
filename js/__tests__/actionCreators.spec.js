// @flow
import moxios from 'moxios';
import { setSearchTerm, addApiData, getApiDetails } from '../actionCreators';

test('setSearchTerm', () => {
  expect(setSearchTerm('New Yord')).toMatchSnapshot();
});

const strangerThings = {
  title: 'Game of Thrones',
  year: '2011–',
  description:
    'Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.',
  poster: 'got.jpg',
  imdbID: 'tt0944947',
  trailer: 'giYeaKsXnsI',
};

test('addAPIData', () => {
  expect(addApiData(strangerThings)).toMatchSnapshot();
});

test('getApiDetails', (done: Function) => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    getApiDetails(strangerThings.imdbID)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request
        .respondWith({
          status: 200,
          response: strangerThings,
        })
        .then(() => {
          expect(request.url).toEqual(
            `http://localhost:3000/${strangerThings.imdbID}`
          );
          expect(dispatchMock).toBeCalledWith(addApiData(strangerThings));
          done();
        });
    });
  });
});
