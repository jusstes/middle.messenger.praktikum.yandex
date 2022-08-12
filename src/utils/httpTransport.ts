import queryStringify from './queryStringify';

enum Methods {
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

    return this.request(`${url}${urlAddon}`, {
      ...options,
      method: Methods.GET,
    });
  };

  public post = (url: string, options: Options) => {
    return this.request(url, { ...options, method: Methods.POST });
  };

  public put = (url: string, options: Options) => {
    return this.request(url, { ...options, method: Methods.PUT });
  };

  public delete = (url: string, options: Options) => {
    return this.request(url, { ...options, method: Methods.DELETE });
  };

  private request = (url: string, options: Options) => {
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

      if (options.timeout) {
        xhr.timeout = options.timeout;
      }

      xhr.onload = () => resolve(xhr);

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.send();
    });
  };
}

export default HTTPTransport;
