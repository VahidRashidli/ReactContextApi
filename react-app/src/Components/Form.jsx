import React,{useContext} from 'react'
import InfoComponent from './InfoComponent'
import { FullNameContext } from '../Context/FullNameContext'
export default function Form() {
    const {UpdateFullName}=useContext(FullNameContext);
    function SendToUpdateFullName(e) {
        e.preventDefault();
        const form=e.target.closest("form");
        const name=form.elements["name"].value
        const surname=form.elements["surname"].value
        UpdateFullName({name,surname});
        form.reset();
    }
  return (
    <>
    <form className='form'>
        <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" autoComplete='off' name="name"className="form-control" />
        </div>
        <div className="form-group">
            <label htmlFor="surName" className="form-label">Surname</label>
            <input type="text" autoComplete='off' name="surname"className="form-control" />
        </div>
        <div className="form-group">
            <button onClick={SendToUpdateFullName} className='btn btn-primary'>Submit</button>
        </div>
    </form>
    <InfoComponent/>
    </>
  )
}
