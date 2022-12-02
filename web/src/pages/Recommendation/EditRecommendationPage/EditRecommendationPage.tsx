import EditRecommendationCell from 'src/components/Recommendation/EditRecommendationCell'

type RecommendationPageProps = {
  id: number
}

const EditRecommendationPage = ({ id }: RecommendationPageProps) => {
  return <EditRecommendationCell id={id} />
}

export default EditRecommendationPage
