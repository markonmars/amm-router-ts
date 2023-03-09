import { camelCase } from 'lodash'

export const camelCaseKeys = (object: Object) => {
	const newObject = {}
	//@ts-ignore tells us that we cannot 'use string to index {}' but we can :)
	Object.keys(object).forEach((key) => (newObject[camelCase(key)] = object[key]))
	return newObject
}