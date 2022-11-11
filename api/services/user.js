import User from '../models/User.js'
import CRUDService from './crud.js'

export default class extends CRUDService{
    constructor(){
        super(User)
    }
}