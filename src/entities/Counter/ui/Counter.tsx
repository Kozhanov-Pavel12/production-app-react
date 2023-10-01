import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/counterSlice";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { useTranslation } from "react-i18next";

export const Counter = () => {

    const { t } = useTranslation()

    const dispatch = useDispatch()
    // Используем, чтобы достать данные из стэйта
    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())
    }


    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="value-title">value = {counterValue}</h1>
            <Button data-testid="increment-btn" onClick={increment}>{t('Увеличить')}</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>{t('Уменьшить')}</Button>
        </div>
    );
};
