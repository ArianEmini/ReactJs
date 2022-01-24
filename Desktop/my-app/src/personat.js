function Personat(props,handleDelete) {
    const personat = props.personat;
    const Lista = props.titulli;
  

    
    return (
        <div className="personat">
            <h2>{Lista}:</h2>
            {personat.map((personat) => (
                <div className="person-list" key={personat.id} >
                    <h5>
                        {personat.id}.{personat.emri}-{personat.Mbiemri}-{personat.adressa}-
                        {personat.shteti}
                    </h5>
                    <button onClick={()=>handleDelete(personat.id)}>Fshije Personin</button>

                </div>

           ))}
        </div>
    );
}

export default Personat;
