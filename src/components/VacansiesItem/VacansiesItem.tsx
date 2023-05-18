import { FC } from 'react'
import { getVacansyes } from '../../store/slice/getVacansyes'
import { useAppDispatch } from '../../store/store'

export const VacancyItems: FC = () => {
	const dispatch = useAppDispatch()
	return (
		<>
			<button
				onClick={() => {
					dispatch(getVacansyes())
				}}
			>
				PandonmnayButton
			</button>
		</>
	)
}
