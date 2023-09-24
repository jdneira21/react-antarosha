import { GraphQLError } from 'graphql'
import { pool } from '../../connetBd'

export default {
  Query: {
    allImages: async ({}={}, { apertureId }: any) => {
      const [images] = await pool.query('SELECT * FROM images')
      return images
    }
  }

}