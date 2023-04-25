import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme'
import StudioNavbar from './components/StudioNavbar'
import Logo from './components/Logo'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineConfig({
  basePath: "/studio",
  name: 'MNK_Content_Studio',
  title: 'MNK Content Studio',

  projectId: 'q10mrwo5',
  dataset: 'production',
  // projectId: projectId,
  // dataset: dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studion: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    },
  },
  theme: myTheme,
})
