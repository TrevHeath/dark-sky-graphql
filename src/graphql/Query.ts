import { queryType, arg } from 'yoga'
import { Weather, WeatherByLatLngInput } from './Weather'
import fetch from 'node-fetch'

/*
type Query {
  hello(name: String!): String!
  user(name: String!): User!
}
*/

const baseURL = `https://api.darksky.net/forecast/035b35ece00c66d618325fbaab5df6ed`

export const Query = queryType({
  definition(t) {
    t.field('weatherByLatLng', {
      type: Weather,
      args: {
        input: arg({
          type: WeatherByLatLngInput,
          required: true,
        }),
      },
      resolve: (root, args, ctx) => {
        const { lat, lng } = args.input
        return fetch(`${baseURL}/${lat},${lng}`).then(res => res.json())
      },
    })
  },
})
