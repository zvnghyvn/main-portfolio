import certificateList from "@data/certificates"
import { Certificates } from '@styles/sections/CertificatesSection.styles';
import CertificateIcon from '../assets/images/ico_certificate.png'

const CertificatesSection = () => {
  return (
    <Certificates id="certificate">
      <h2 className="title-sm">Certificate</h2>

      <ul className="certificate-list">
        {certificateList.map((certificate) => (
          <li key={certificate.id} className="flex">
            <img src={CertificateIcon} alt="메달 아이콘" />
            <strong className="certificate-title">{certificate.title}</strong>
            <span className="certificate-issuer">{certificate.issuer}</span>
            <span className="certificate-date"><b>취득일: </b>{certificate.date}</span>
          </li>
        ))}
      </ul>
    </Certificates>
  )
}

export default CertificatesSection