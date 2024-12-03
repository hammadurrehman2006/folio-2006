import { type SchemaTypeDefinition } from 'sanity'
import profile from './profile'
import job from './job'
import project from './projects'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, job, project,],
}