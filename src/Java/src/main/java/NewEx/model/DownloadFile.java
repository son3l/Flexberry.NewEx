package NewEx.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import NewEx.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

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

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Optimize")
    @Convert("Optimize")
    @Column(name = "Optimize", length = 16, unique = true, nullable = false)
    private UUID _optimizeid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Optimize", insertable = false, updatable = false)
    private Optimize optimize;


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


}