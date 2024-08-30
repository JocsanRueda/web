import SliderBoard from "../Components/SliderBoard"
// eslint-disable-next-line react/prop-types
export function Admin({list}) {

    return (
        <>
           
            <div className="d-flex flex-row ">
                <div className='p-0'>
                    <SliderBoard options={list} urlProfile = '/administracion/perfil' />
                </div>
                <div className='p-5'>
                    <h2 className='fs-1'>Administración</h2>
                   
                </div>
            </div>

        </>
    )
}

export default Admin