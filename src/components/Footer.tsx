import GitHubIcon from '@/icons/GitHubIcon'
import LinkedInIcon from '@/icons/LinkedinIcon'

function Footer() {
    return (
        <footer className=' w-full  h-12 flex flex-row items-center justify-center gap-2 p-2 border'>
            <p>Hecho por Eze ❤️</p>
            <a  aria-label='Conóceme visitando mi linkedin' target={'_blank'} href="https://www.linkedin.com/in/ezequiel-r/" >
            <LinkedInIcon />
            </a>
            <a  aria-label='Conoce mas sobre mis proyectos en github' target={'_blank'} href="https://github.com/Quide1" >
                <GitHubIcon />
            </a>
        </footer>
    )
}

export default Footer
