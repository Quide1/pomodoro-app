import GitHubIcon from '@/icons/GitHubIcon'

function Footer() {
    return (
        <footer className=' w-full  h-12 flex flex-row items-center justify-center gap-2 p-2 border'>
            <p>Hecho por Eze ❤️</p>
            <a  aria-label='Conoce mas sobre mis proyectos en github' target={'_blank'} href="https://github.com/Quide1" >
                <GitHubIcon />
            </a>
        </footer>
    )
}

export default Footer
