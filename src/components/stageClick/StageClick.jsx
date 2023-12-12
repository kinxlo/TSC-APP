import { MdOutlineNavigateNext } from 'react-icons/md'

export default function StageClick(props) {
  const { totalStages, currentStage, handleStageClick } = props
  return (
    <div className='d-none d-md-flex d-lg-flex text-center d-flex justify-content-center align-items-center gap-6' style={{ marginBottom: '40px' }}>
      {[...Array(totalStages)].map((_, stage) => (
        <button
          key={stage + 1}
          className={`border rounded-5 text-center text-primary cursor-pointer ${currentStage === stage + 1 ? 'bg-primary text-white' : ''}`}
          style={{ backgroundColor: '#E3E3E3', width: '32px', height: '32px' }}
          onClick={() => {
            handleStageClick(stage + 1)
          }}
        >
          {stage + 1}
        </button>
      ))}
      {totalStages > 1 && (
        <div className='p-0 m-0'>
          <MdOutlineNavigateNext />
          <MdOutlineNavigateNext />
        </div>
      )}
    </div>
  )
}
