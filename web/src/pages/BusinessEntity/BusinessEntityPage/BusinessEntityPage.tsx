import BusinessEntityCell from 'src/components/BusinessEntity/BusinessEntityCell'

type BusinessEntityPageProps = {
  id: number
}

const BusinessEntityPage = ({ id }: BusinessEntityPageProps) => {
  return <BusinessEntityCell id={id} />
}

export default BusinessEntityPage
