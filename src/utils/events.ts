import FormValidator from './FormValidator';

const findErrorElement = (input: HTMLElement) => {
  return input.closest('.field')?.querySelector('.field__error');
};

const toggleInputError = (
  input: HTMLInputElement,
  result: {
    verify: boolean;
    message: string;
  },
): void => {
  const errorElement = findErrorElement(input);

  if (!result.verify && errorElement) {
    errorElement.textContent = result.message;
    errorElement?.classList.add('_visible');
  } else {
    errorElement?.classList.remove('_visible');
  }
};

const handleSubmit = (evt: Event): void => {
  evt.preventDefault();

  const inputValue: Record<string, string> = {};
  const inputList = document.querySelectorAll('input');

  inputList.forEach((input: any) => {
    inputValue[input.name] = input.value;
  });

  console.log(inputValue);
};

const focus = (event: Event): void => {
  const input = event.target as HTMLInputElement;
  const errorElement = findErrorElement(input);
  errorElement?.classList.remove('_visible');
};

const blur = (event: Event): void => {
  const input = event.target as HTMLInputElement;
  const result = FormValidator.validate(input.name, input.value);

  toggleInputError(input, result);
};

export { focus, blur, handleSubmit };
