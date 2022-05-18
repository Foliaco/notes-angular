/**
 * El objeto INote para getNotas.
 * @atribute `title`
 * @atribute `body`
 * @atribute `date?`
 *
 */
export interface INotes{
  title:string;
  body:string;
  date?:Date|string;
}
