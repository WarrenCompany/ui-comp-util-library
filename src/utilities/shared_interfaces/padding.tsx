import Options from "./options";

export default interface Padding extends Options{
    padding?: boolean,
    padding_side?: Options['sides'],
    padding_full?: Options['fives'],
    padding_top?: Options['fives'],
    padding_bottom?: Options['fives'],
    padding_left?: Options['fives'],
    padding_right?: Options['fives'],
    padding_x?: Options['fives'],
    padding_y?: Options['fives'],
  } 