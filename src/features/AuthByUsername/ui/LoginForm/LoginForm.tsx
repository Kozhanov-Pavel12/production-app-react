import { classNames } from 'shared/lib/classNames/classNames';

import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {

    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername( { username, password } ))
        
        // Для закрытия модального окна
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }

    }, [dispatch, username, password, onSuccess])

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true} >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизация')}/>
                { error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} /> }
                <Input 
                    className={cls.input} 
                    placeholder={t('Введите логин')} 
                    autofocus 
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input 
                    type="password" 
                    className={cls.input} 
                    placeholder={t('Введите пароль')} 
                    onChange={onChangePassword}
                    value={password}
                />
                <Button 
                    className={cls.loginBtn} 
                    theme={ThemeButton.OUTLINE} 
                    onClick={onLoginClick} 
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;