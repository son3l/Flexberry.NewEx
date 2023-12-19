package NewEx.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import NewEx.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: DownloadFile
 */
@Entity(name = "IISNewExDownloadFile")
@Table(schema = "public", name = "DownloadFile")
public class DownloadFile {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "PathToLoad")
    private String pathtoload;

    @Column(name = "Repository")
    private String repository;


    public DownloadFile() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getPathToLoad() {
      return pathtoload;
    }

    public void setPathToLoad(String pathtoload) {
      this.pathtoload = pathtoload;
    }

    public String getRepository() {
      return repository;
    }

    public void setRepository(String repository) {
      this.repository = repository;
    }


}