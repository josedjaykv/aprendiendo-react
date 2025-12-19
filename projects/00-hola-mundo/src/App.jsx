import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    const format = (userName) => `@${userName}`

    // Ademas de pasar funciones tambien podemos pasar elementos HTML
    const formattedUserName = <span>@joselito</span>

    const midudev = { name: 'Miguel', formatUserName: format, formattedUserName: formattedUserName }

    const user = [
        {
            userName: 'midudev',
            name: 'Miguel Angel',
            formattedUserName: formattedUserName,
            formatUserName: format,
            isFollowing: false,
            key: 123
        },
        {
            userName: 'josedjaykv',
            name: 'Jose David Jayk Vanegas',
            formattedUserName: formattedUserName,
            formatUserName: format,
            isFollowing: true,
            key: 456
        }
    ]

    return (
        <section className='App'>
            {
                user.map(user => {
                    const { userName, name, formattedUserName, formatUserName, isFollowing, key } = user
                    return (
                        <TwitterFollowCard userName={userName} formattedUserName={formattedUserName} formatUserName={formatUserName} initialIsFollowing={isFollowing} key={key}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}