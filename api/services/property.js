import Property from '../models/Property.js'
import CRUDService from './crud.js'

export default class extends CRUDService{
    constructor(){
        super(Property)
    }
}