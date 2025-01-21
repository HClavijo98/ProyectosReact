import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions"
import { useState } from "react";

export function CreateNewUser () {
    const { addUser, updateUser } = useUserActions()
    const [result, setResult] = useState<'ok' | 'ko' | null>(null)
    function handleSubmit (event: React.FormEvent<HTMLFormEvent>) {
        event.preventDefault()
        setResult(null)

        const form = event.target
        const formData = new FormData(form)

        const id = formData.get('id') as string
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const github = formData.get('github') as string

        if (!name || !email || !github) {
            return setResult('ko')
        }
        if (!id){
            addUser({ name, email, github })
        } else {
            updateUser({ id, name, email, github })
        }

        setResult('ok')
        form.reset()
    }
    return (
        <Card style={{ marginTop: '16px' }}>
            <Title>Create New User</Title>
            <form onSubmit={handleSubmit} className="">
                <TextInput name='id' placeholder="Aqui el ID" />
                <TextInput name='name' placeholder="Aqui el nombre" />
                <TextInput name='email' placeholder="Aqui el email" />
                <TextInput name='github' placeholder="Aqui el usuario de Github" />
                <div>
                    <Button type="submit" style={{ marginTop: '16px' }}>
                        Crear usuario
                    </Button>
                    <span>
                        {result === 'ok' && <Badge style={{color: 'green'}}>Guardado correctamente</Badge>}
                        {result === 'ko' && <Badge style={{color: 'red'}}>Error con los campos</Badge>}
                    </span>
                </div>
            </form>
        </Card>
    )
}