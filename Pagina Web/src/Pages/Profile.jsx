export function Profile() {
  return (
    <>
      <div className="text-white ">
        <p className="jetbrains-mono-1">Hola mi nombre es_</p>
        <p className="lexend-deca-custom-1 ">Jocsan Rueda</p>
        <p className="lexend-deca-custom-2 ">
          Bienvenido a mi portafoleo como desarrollador trainer
        </p>
        <p className="lexend-deca-custom-2">
          Si quieres contactarme escribe a{" "}
          <a
            href="mailto:jocsanelyrueda@gmail.com"
            className="jetbrains-mono-1"
          >
            jocsanelyrueda@gmail.com
          </a>
        </p>
        <button type="button" className="btn text-white bg-fost ">
          Descargar CV
        </button>
      </div>
    </>
  );
}

export default Profile;
