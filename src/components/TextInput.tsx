import { TextInput, TextInputProps } from '@mantine/core'

// CSS Constants
const BG_GREY = 'rgb(79, 79, 79, .3)',
  FONT_SIZE_INPUT = '20px',
  TEXT_GREY = '#dadada',
  TEXT_PRIMARY = '#ffffff',
  BG_LIGHTGREY = 'rgb(180, 180, 180, .4)',
  BORDER_COLOR = 'rgb(255, 255, 255, .5)',
  BORDER_COLOR_2 = 'rgb(255, 255, 255, .9)'

const TextInputWrapper = (
  props: TextInputProps
) => (
  <TextInput
    {...props}
    variant='headless'
    styles={
      {     
        invalid: {
          color: TEXT_GREY,
          
          '::placeholder': {
            color: TEXT_GREY
          },

          '&:hover, &:focus': {
            color: TEXT_PRIMARY,
            borderColor: 'red'
          }
        },

        input: {
          backgroundColor: BG_GREY,
          border: 'none',

          paddingTop: '10px',
          paddingBottom: '8px',

          outline: 'none',
          borderBottom: '1px solid',

          fontSize: FONT_SIZE_INPUT,
          color: TEXT_GREY,

          transition: 'ease-in-out',
          transitionDuration: '.2s',

          borderBottomColor: BORDER_COLOR,

          '&:hover, &:focus': {
            backgroundColor: BG_LIGHTGREY,
            color: TEXT_PRIMARY,

            borderBottomColor: BORDER_COLOR_2
          }
        }
      }
    }
  />
)

export default TextInputWrapper