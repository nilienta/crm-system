/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable no-useless-escape */
/* eslint-disable prefer-template */

export const getCookie = (name: string): string | undefined => {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

type TCookieProps = {
  expires?: string | number | boolean;
  path?: '/';
} & { [propName: number]: string | number | boolean };

export const setCookie = (
  name: string,
  value: string | null,
  props: TCookieProps = {}
) => {
  const exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    props.expires = d.toUTCString();
  }
  if (typeof value === 'string') {
    value = encodeURIComponent(value);
  }
  let updatedCookie = name + '=' + value;
  Object.keys(props).forEach((propName) => {
    updatedCookie += '; path=/;' + propName;
    const propValue = props[propName as keyof TCookieProps];
    if (propValue !== true) {
      updatedCookie += '=' + String(propValue);
    }
  });
  document.cookie = updatedCookie;
};

export const deleteCookie = (name: string) => {
  setCookie(name, null, { expires: -1 });
};
