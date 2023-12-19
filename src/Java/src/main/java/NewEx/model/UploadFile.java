package NewEx.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import NewEx.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: UploadFile
 */
@Entity(name = "IISNewExUploadFile")
@Table(schema = "public", name = "UploadFile")
public class UploadFile {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "PathToFile")
    private String pathtofile;

    @Column(name = "lvlCompress")
    private Integer lvlcompress;

    @Column(name = "method")
    private String method;

    @Column(name = "PathToLoad")
    private String pathtoload;

    @Column(name = "Repository")
    private String repository;


    public UploadFile() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getPathToFile() {
      return pathtofile;
    }

    public void setPathToFile(String pathtofile) {
      this.pathtofile = pathtofile;
    }

    public Integer getlvlCompress() {
      return lvlcompress;
    }

    public void setlvlCompress(Integer lvlcompress) {
      this.lvlcompress = lvlcompress;
    }

    public String getmethod() {
      return method;
    }

    public void setmethod(String method) {
      this.method = method;
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