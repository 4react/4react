import { select } from '@storybook/addon-knobs'

const language = (name, groupId) => select(name, ['en', 'it'], 'en', groupId)

export default language
