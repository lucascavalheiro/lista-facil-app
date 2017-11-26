const type = {
  base: 'Roboto-Regular',
  bold: 'Roboto-Black'
}

const size = {
  input: 18,
  big: 22,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  }
}

export default {
  type,
  size,
  style
}
