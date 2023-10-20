import { FC, useEffect, useState, useCallback } from 'react'
import { Button, Input, InputPassword, Logo } from 'components/ui'
import { useUI } from 'components/ui/context'
import { useUserAuth } from 'components/userAuth/context'
import { validate } from 'email-validator'
import { Mail, Person, Key } from 'components/icons'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { cpf } from 'cpf-cnpj-validator'
import { isValidPhoneNumber } from 'react-phone-number-input'
import Link from 'next/link'

const passwordLength = parseInt(`${process.env.PASSWORD_LENGTH}`)

interface Props { }

const SignUpView: FC<Props> = () => {
  const enablePhone = true

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [doc, setDoc] = useState('')
  const [birth, setBirth] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(true)
  const [disabled, setDisabled] = useState(false)
  const [agree, setAgree] = useState(false)

  const { setModalView } = useUI()
  const { signUp } = useUserAuth()

  const handleSignup = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    if (loading) {
      return null
    }

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    setLoading(true)

    signUp(name.trim(), email.trim(), phone.trim(), password, doc, birth).then(
      (r: any) => {
        if (!r || (r && r.message === 'No current user')) {
          setLoading(false)
          setMessage('')
          setModalView('CONFIRM_VIEW')
        }

        switch (r && r.message) {
          case 'Password did not conform with policy: Password not long enough':
            setLoading(false)
            setMessage(
              'A senha não está em conformidade com a política: a senha não é longa o suficiente.'
            )
            break

          case 'Invalid phone number format.':
            setLoading(false)
            setMessage('Número do telefone com DDD é inválido.')
            break

          case 'An account with the given phone_number already exists.':
            setLoading(false)
            setMessage(`Já existe uma conta cadastrada com este login.`)
            break

          case 'Username cannot be empty':
            setLoading(false)
            setMessage('Nome deve ser informado!')
            break

          case 'An account with the given email already exists.':
            setLoading(false)
            setMessage(
              'Seu email já esta cadastrado! Faça login para acessar sua conta.'
            )
            break

          case 'Incorrect username or password.':
            setLoading(false)
            setMessage(
              'Já existe uma conta cadastrada com estes dados, faça login.'
            )
            break

          case 'User is not confirmed.':
            setLoading(false)
            setMessage('Sua conta já existe! Abaixo clique em Ir para o login.')
            break

          default:
            setLoading(false)
            const m =
              r && r.message && r.message !== 'No current user' ? r.message : ''
            setMessage(m)
        }
      }
    )
  }

  const handleValidation = useCallback(() => {
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)
    if (dirty) {
      setDisabled(
        !agree ||
        name.length < 5 ||
        name.indexOf(' ') === -1 ||
        !email ||
        !validate(email) ||
        !phone ||
        !isValidPhoneNumber(phone) ||
        phone.length < 13 ||
        !doc ||
        !cpf.isValid(doc) ||
        !birth ||
        !validPassword ||
        password.length < (passwordLength as any)
      )
    }
  }, [name, email, phone, password, doc, birth, agree, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  const handleCheckboxChange = (event: any) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    if (target.name === 'agree') {
      setAgree(value)
    }
  }

  return (
    <div className="select-none px-5 md:px-10 pt-2 pb-32 md:pb-20">
      <form
        onSubmit={handleSignup}
        className="w-full flex flex-col justify-between"
      >
        <div className="flex justify-center">
          <Logo />
        </div>

        <div className="mt-6 grid grid-cols-6 gap-4">
          <div className="col-span-6 text-lg font-semibold text-center">
            Entre com seus dados
          </div>

          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <Input
              label="Nome completo"
              icon={<Person />}
              value={name}
              onChange={setName}
              type="text"
              placeholder=""
              onInvalid={`${name && (name.length < 5 || name.indexOf(' ') === -1)
                ? 'Nome inválido.'
                : ''
                }`}
            />
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <Input
              label="CPF"
              value={doc}
              onChange={setDoc}
              type="number"
              placeholder=""
              defaultValue=""
              onInvalid={`${doc && !cpf.isValid(doc) ? 'CPF inválido.' : ''}`}
            />
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <Input
              label="Email"
              icon={<Mail />}
              value={email}
              onChange={setEmail}
              type="email"
              placeholder=""
              onInvalid={`${email && !validate(email) ? 'Email inválido.' : ''
                }`}
            />
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <div className="flex -mx-3">
              <div className="w-full px-3">
                <label className="text-accent-7 text-sm font-semibold px-1">
                  Celular
                </label>
                <div className="flex">
                  <div className="w-10 z-10"></div>
                  <PhoneInput
                    name="phone"
                    id="phone"
                    className="bg-accent-1 w-full pl-3 -ml-10 rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
                    value={phone as any}
                    onChange={(e: any) => setPhone(e)}
                    international={false}
                    countrySelectProps={{ unicodeFlags: true }}
                    defaultCountry="BR"
                    placeholder=""
                  />
                </div>
                {phone && (!isValidPhoneNumber(phone) || phone.length < 13) && (
                  <span className="text-red text-xs font-semibold">
                    Celular inválido.
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <Input
              label="Nascimento"
              value={birth}
              onChange={setBirth}
              type="date"
              placeholder=""
            />
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <InputPassword
              label="Crie uma senha"
              notes={`Mínimo ${passwordLength ? passwordLength : 8
                } caracteres com letras e números.`}
              icon={<Key />}
              value={password}
              onChange={setPassword}
              placeholder=""
              onInvalid={`${password &&
                (password.length < (passwordLength as any) ||
                  /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password) === false)
                ? 'Senha inválida.'
                : ''
                }`}
            />
          </div>
        </div>

        <div className="mt-4 md:mt-0 flex flex-start">
          <div>
            <label
              htmlFor="agree"
              className="inline-flex items-center w-full cursor-pointer"
            >
              <input
                id="agree"
                type="checkbox"
                className="checkbox"
                name="agree"
                checked={agree}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-sm text-accent-9">
                Concorda com os
              </span>
            </label>
          </div>

          <div className="ml-1">
            <Link href="/page/termos_uso/" target="_blank">
              <span className="text-blue text-sm cursor-pointer">
                Termos de uso?
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-4 flex flex-col space-y-4">
          {message && (
            <div className="max-w-sm whitespace-pre-line py-3 px-5 mb-4 text-rose-600 bg-accent-2 text-sm rounded-md border border-rose-600">
              {message}
            </div>
          )}

          <div className="py-2 w-full flex flex-col">
            <Button type="submit" loading={loading} disabled={disabled}>
              ATIVAR SUA CONTA
            </Button>
          </div>

          <div className="text-center">
            <span className="text-accent-7">Já ativou sua conta?</span>
            {` `}
            <a
              className="text-accent-9 font-bold cursor-pointer"
              onClick={() => setModalView('LOGIN_VIEW')}
            >
              <br />
              <span className="text-tertiary-2 text-xl">Ir para o login.</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUpView
