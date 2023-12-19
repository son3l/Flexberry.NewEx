package NewEx.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import NewEx.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: NoNOptFile
 */
@Entity(name = "IISNewExNoNOptFile")
@Table(schema = "public", name = "NoNOptFile")
public class NoNOptFile {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Date")
    private Date date;

    @Column(name = "Repository")
    private String repository;

    @Column(name = "Name")
    private String name;

    @Column(name = "Size")
    private Integer size;

    @Column(name = "Exe")
    private String exe;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "NoNOptFile")
    @Convert("NoNOptFile")
    @Column(name = "NoNOptFile", length = 16, unique = true, nullable = false)
    private UUID _nonoptfileid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "NoNOptFile", insertable = false, updatable = false)
    private UploadFile nonoptfile;


    public NoNOptFile() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getDate() {
      return date;
    }

    public void setDate(Date date) {
      this.date = date;
    }

    public String getRepository() {
      return repository;
    }

    public void setRepository(String repository) {
      this.repository = repository;
    }

    public String getName() {
      return name;
    }

    public void setName(String name) {
      this.name = name;
    }

    public Integer getSize() {
      return size;
    }

    public void setSize(Integer size) {
      this.size = size;
    }

    public String getExe() {
      return exe;
    }

    public void setExe(String exe) {
      this.exe = exe;
    }


}