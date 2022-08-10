import queryStringify from './queryStringify';

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  method: string;
  headers?: Record<string, string>;
  data?: any;
  timeout?: number;
};

class HTTPTransport {
  public get = (url: string, options: Options) => {
    let urlAddon = '';

    if (options.data) {
      urlAddon = queryStringify(options.data);
    }

    return this.request(
      `${url}${urlAddon}`,
      { ...options, method: METHODS.GET },
      options.timeout,
    );
  };

  public post = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout,
    );
  };

  public put = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout,
    );
  };

  public delete = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout,
    );
  };

  private request = (url: string, options: Options, timeout = 3000) => {
    const { headers = {}, method } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (!method) {
        reject('Нет метода');
      }

      xhr.open(method, url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.timeout = timeout;

      xhr.onload = () => resolve(xhr);

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.send();
    });
  };
}

export default HTTPTransport;
