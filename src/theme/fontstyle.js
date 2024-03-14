import { colors } from "./colors";

export function getFontType(fontWeight) {
    if (fontWeight == 300) {
      return 'Poppins-Light';
    } else if (fontWeight == 400) {
      return 'Poppins-Regular';
    } else if (fontWeight == 500) {
      return 'Poppins-Medium';
    } else if (fontWeight == 600) {
      return 'Poppins-SemiBold';
    } else if (fontWeight == 700) {
      return 'Poppins-Bold';
    } else if (fontWeight == 800) {
      return 'Poppins-ExtraBold';
    } else if (fontWeight == 900) {
      return 'Poppins-Black';
    } else {
      return 'Poppins-Regular';
    }
  }

export const FontStyle = (color = colors?.common?.black, fontSize = 14, fontFamily = 400) => {
    return {
        color: color,
        fontSize: fontSize,
        fontFamily: getFontType(fontFamily)
    }
}