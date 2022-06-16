import Options from "./options";

export default interface Background extends Options {
    background_color?: Options['colors'],
    background_color_density?: Options['hundreds']
  }