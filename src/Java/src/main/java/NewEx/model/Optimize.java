package NewEx.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import NewEx.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Optimize
 */
@Entity(name = "IISNewExOptimize")
@Table(schema = "public", name = "Optimize")
public class Optimize {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "lvlCompress")
    private Integer lvlcompress;

    @Column(name = "method")
    private String method;

    @Column(name = "PathToLoad")
    private String pathtoload;

    @Column(name = "Repository")
    private String repository;


    public Optimize() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
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