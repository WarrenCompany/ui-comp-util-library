import Options from "./options";

export default interface Font extends Options{
    font?: 'apple' | 'sans' | 'helvetica',
    font_weight?: 'ultralight' | 'light' | 'normal' | 'semibold' | 'bold' | 'black',
    text_color?: Options['colors'],
    text_color_density?: Options['hundreds'],
    font_size?: Options['sizes'],
    font_case?: boolean,
    font_style?: 'italic' | 'normal',
  }