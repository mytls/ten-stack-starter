export namespace NHomeDto {
  export type TValidateInput = {
    num: number;
  };

  export type TValidate<T> = (input: T) => string | T;
}

export namespace NHomeService {
  export type TSayHello = () => string;
}
