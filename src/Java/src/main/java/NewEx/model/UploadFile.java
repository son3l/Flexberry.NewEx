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


}