import Contact from '../models/Contact.js'
import CRUDService from './crud.js'

export default class extends CRUDService{
    constructor(){
        super(Contact)
    }
}