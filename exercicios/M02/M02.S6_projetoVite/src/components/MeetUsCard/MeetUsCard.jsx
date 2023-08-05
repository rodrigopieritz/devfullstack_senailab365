
const MeetUsCard =() => {
    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Venha conhecer nossa loja</h5>
    
            <div className="mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14144.440762170903!2d-48.53018892264203!3d-27.590113172081814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952738f9a43df7b3%3A0x7de9ac6b3cdfced0!2sVilla%20Romana%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1687895814489!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Google Maps"
              ></iframe>
            </div>
    
            <div className="mb-3">
              <strong>Endereço:</strong> Rua Exemplo, 123 - Cidade, Estado
            </div>
    
            <div className="mb-3">
              <strong>E-mail:</strong> exemplo@email.com
            </div>
    
            <div className="mb-3">
              <strong>Contato:</strong> (48) 3444-0123
            </div>
    
            <div className="mb-3">
              <strong>Horário de Atendimento:</strong> Seg-Sex: 9h às 18h | Sáb: 9h às 13h
            </div>
          </div>
        </div>
      );
    };
export default MeetUsCard;