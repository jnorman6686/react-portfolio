import Link from "./Link"

const Project = ({ data, reverse }) => {
  return (
    <article className="project" style={{flexDirection: reverse ? 'row-reverse' : 'row',}}>
        <div className="image">
            <img src={data.image} alt={data.title} />
        </div>
        <div className="content">
            <h3>{data.title}</h3>
            <ul>
                {data.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
            <p>{data.description}</p>
            <div>
                <Link href={data.liveLink}>Live Site</Link>
                <Link href={data.githubLink}>GitHub</Link>
            </div>
        </div>
    </article>
  )
}

export default Project