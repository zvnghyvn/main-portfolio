import certificateList from "@data/certificates"

const CertificatesSection = () => {
  return (
    <section id="certificate">
      <h4>certificate</h4>

      <ul className="certificate-list">
        {certificateList.map((certificate) => (
          <li key={certificate.id}>
            <strong className="certificate-title">{certificate.title}</strong>
            <span className="certificate-issuer">{certificate.issuer}</span>
            <span className="certificate-date">{certificate.date}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CertificatesSection