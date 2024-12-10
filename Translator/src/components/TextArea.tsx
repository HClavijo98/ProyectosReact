import { Form } from "react-bootstrap"
import { SectionType } from "../types.d"

interface Props {
    type: SectionType
    autoFocus: boolean
    loading?: boolean
    onChange: (value: string) => void
    value: string
}

function getPlaceholder ({ type, loading }: { type: SectionType, loading?: boolean }) {
    if (type === SectionType.From) return 'Introducir texto'
    if (loading === true) return 'Cargando...'
    return 'Traduccion'
}

const commonStyles = { border: 0, height: '200px', resize: 'none' }

export function TextArea({ type, loading, value, onChange }: Props) {
    const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

    function handleChange (event: React.ChangeEvent<HTMLTextAreaElement>) {
        onChange(event.target.value)
    }
    return (
        <Form.Control
            autoFocus={type === SectionType.From}
            as='textarea'
            disabled={type === SectionType.To}
            placeholder={getPlaceholder({ type, loading })}
            style={styles}
            value={value}
            onChange={handleChange}
        />
    )
}