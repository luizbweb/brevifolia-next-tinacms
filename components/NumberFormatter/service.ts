import { str2number, suffix } from "./util.ts";

/**
 * Converte uma string em um número decimal formatado.
 *
 * @param {number|string} value Valor a ser formatado
 * @param {string} unit Unidade de medida
 * @param {number} precision Precisão das casas decimais
 *
 * @return {string} Número formatado
 */
const float = (
  value: number | string = 0,
  unit = "",
  precision = 0
): string => {
  const numberValue = str2number(value);
  return suffix(numberValue, unit, precision);
};

/**
 * Converte uma string em um número inteiro formatado.
 *
 * @param {number|string} value Valor a ser formatado
 * @param {string} unit Unidade de medida
 *
 * @return {string} Número formatado
 */
const int = (value: number | string = 0, unit?: string): string => {
  return float(value, unit, 0);
};

/**
 * Converte um número em formato de moeda.
 *
 * Caso o valor passado como parâmetro seja uma
 * `string`, essa `string` é convertida para `float`.
 * Caso a conversão falhe, será usado o valor `0`
 * como retorno padrão.
 *
 * @param {number|string} value Valor a ser formatado
 * @return {string} Valor formatado
 */
const currency = (value: number | string = 0): string => {
  const numberValue = str2number(value);
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatter.format(numberValue);
};

/**
 * Converte um número em formato de dimensão, usando
 * a unidade de medida _metro_ (**m**).
 *
 * Caso o valor passado como parâmetro seja uma
 * `string`, essa `string` é convertida para `float`.
 * Caso a conversão falhe, será usado o valor `0`
 * como retorno padrão.
 *
 * @param {number|string} value Valor a ser formatado
 * @return {string} Valor formatado
 */
const dimension = (value: number | string = 0): string => {
  const numberValue = str2number(value);
  return suffix(numberValue, "m");
};

/**
 * Converte um número em formato de peso, usando
 * a unidade de medida _quilograma_ (**kg**).
 *
 * Caso o valor passado como parâmetro seja uma
 * `string`, essa `string` é convertida para `float`.
 * Caso a conversão falhe, será usado o valor `0`
 * como retorno padrão.
 *
 * @param {number|string} value Valor a ser formatado
 * @return {string} Valor formatado
 */
const weight = (value: number | string = 0): string => {
  const numberValue = str2number(value);
  return suffix(numberValue, "kg");
};

export default {
  int,
  float,
  currency,
  dimension,
  weight,
};
