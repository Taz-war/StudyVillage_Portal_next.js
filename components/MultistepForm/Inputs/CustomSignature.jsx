import { SignatureForm } from 'react-signature-form'

const CustomSignature = ({ label, name, signature, setSignature }) => {
  return (
    <section style={{ marginBottom: '10px' }}>
      <label>{name}</label>
      <br />
      <SignatureForm
        signature={signature}
        setSignature={setSignature}
        width={700}
        // canvasProps={{ width: 800, height: 200 }}
      />
    </section>
  )
}

export default CustomSignature
