import RecommendationCell from 'src/components/Recommendation/RecommendationCell'

type RecommendationPageProps = {
  id: number
}

const RecommendationPage = ({ id }: RecommendationPageProps) => {
  return <RecommendationCell id={id} />
}

export default RecommendationPage
